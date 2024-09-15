package main

import (
	//general
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid" //unique key

	//ChatGPT needed
	"context"
	"fmt"

	openai "github.com/sashabaranov/go-openai"

	"encoding/json" //convert stringJSOn to json

	"bytes"
	"encoding/base64"
	"image/png"
	"os"
)

type Section struct {
	UniqueID string   `json:"uniqueID"`
	Header   string   `json:"Header"`
	Content  string   `json:"Content"`
	Image    string   `json:"Image"`
	Source   string   `json:"Source"`
	Children []string `json:"Children"` // References other uniqueIDs
}

func createSection(uniqueID string, header string, content string, image string, source string, children []string) Section {
	return Section{
		UniqueID: uniqueID,
		Header:   header,
		Content:  content,
		Image:    image,
		Source:   source,
		Children: children,
	}
}

func GPTResponse(prePrompt string, question string, content string) string {
	// Concatenate full prompt
	fullPrompt := prePrompt + "\n" + question + "\n" + content

	client := openai.NewClient("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")
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo, // Correct model name is: GPT4, GPT3Dot5Turbo
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: fullPrompt,
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return "" // Fix return type
	}

	return resp.Choices[0].Message.Content // Return response
}

func GPTImage(input string) string {

	c := openai.NewClient("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")
	ctx := context.Background()

	// Example image as base64
	reqBase64 := openai.ImageRequest{
		Prompt:         input,
		Size:           openai.CreateImageSize256x256,
		ResponseFormat: openai.CreateImageResponseFormatB64JSON,
		N:              1,
	}

	respBase64, err := c.CreateImage(ctx, reqBase64)

	imgBytes, err := base64.StdEncoding.DecodeString(respBase64.Data[0].B64JSON)

	r := bytes.NewReader(imgBytes)
	imgData, err := png.Decode(r)

	//defint the name of the image
	name := uuid.New().String() + ".png"
	file, err := os.Create(name)

	if err != nil {
		fmt.Printf("File creation error: %v\n", err)
	}
	defer file.Close()

	if err := png.Encode(file, imgData); err != nil {
		fmt.Printf("PNG encode error: %v\n", err)
	}

	return name
}

//second api key
func GPTImage2(input string) string {

	c := openai.NewClient("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")
	ctx := context.Background()

	// Example image as base64
	reqBase64 := openai.ImageRequest{
		Prompt:         input,
		Size:           openai.CreateImageSize256x256,
		ResponseFormat: openai.CreateImageResponseFormatB64JSON,
		N:              1,
	}

	respBase64, err := c.CreateImage(ctx, reqBase64)
	if err != nil {
		fmt.Printf("Image creation error: %v\n", err)
	}

	imgBytes, err := base64.StdEncoding.DecodeString(respBase64.Data[0].B64JSON)
	if err != nil {
		fmt.Printf("Base64 decode error: %v\n", err)
	}

	r := bytes.NewReader(imgBytes)
	imgData, err := png.Decode(r)
	if err != nil {
		fmt.Printf("PNG decode error: %v\n", err)
	}

	//defint the name of the image
	name := uuid.New().String() + ".png"
	file, err := os.Create(name)

	if err != nil {
		fmt.Printf("File creation error: %v\n", err)
	}
	defer file.Close()

	if err := png.Encode(file, imgData); err != nil {
		fmt.Printf("PNG encode error: %v\n", err)
	}

	return name
}

func GPTsource(input string) string {
	// Concatenate full prompt
	prePrompt := "You are a model that only provide link in \"https://....\" formate and nothing else. Give link about"
	fullPrompt := prePrompt + input

	client := openai.NewClient("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")
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT4o, // Correct model name is: GPT4, GPT3Dot5Turbo
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: fullPrompt,
				},
			},
		},
	)

	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return "" // Fix return type
	}

	return resp.Choices[0].Message.Content // Return response
}

func stringjsonToArray(stringJSON string) [4]string {
	// Create a map to hold the parsed JSON
	var array [4]string
	var result map[string]string

	// Parse (unmarshal) the JSON string into the map
	err := json.Unmarshal([]byte(stringJSON), &result)
	if err != nil {
		fmt.Println("Error unmarshalling JSON:", err)
	}

	array[0] = result["sub1"]
	array[1] = result["sub2"]
	array[2] = result["sub3"]
	array[3] = result["sub4"]

	return array
}

//Input: User Question
//Output: Json tree (1 x 4 x 4 )
//Logic:
//1. Get 4 subsection
//2. get 16 subsection from the 4 subsection
//3. paragraph for each of the 16 subsection

// Logic for one  endpoint
func responseTree(body *gin.Context) { //the context client calls
	question := body.Param("question") //gets the question from the client(.../tree/"teach me about biology")

	var sections [21]Section

	var idArray [21]string
	for i := 0; i < 21; i++ {
		idArray[i] = uuid.New().String() // Generate and store the unique ID
	}

	//layer 1---------------------------------------------
	sections[0] = createSection(idArray[0], question, "", "", "", []string{idArray[1], idArray[2], idArray[3], idArray[4]})

	//layer 2-------------------------------------------
	//createSection(uniqueID string, header string, content string, image string, children []string)
	prePrompt1 := "You are an expert at breaking down complex topics into digestible sections. Please respond with 4 main section Title. Response in JSON format provided  {\"sub1\": , \"sub2\": , \"sub3\": , \"sub4\": }."
	headerString := GPTResponse(prePrompt1, question, "")
	header := stringjsonToArray(headerString)

	prePrompt2 := "Explain this point more in under 100 words that is related to the question "

	//node 1
	content1 := GPTResponse(prePrompt2, question, header[0])
	sections[1] = createSection(idArray[1], header[0], content1, GPTImage(header[0]), GPTsource(header[0]), []string{idArray[5], idArray[6], idArray[7], idArray[8]})

	//node 2
	content2 := GPTResponse(prePrompt2, question, header[1])
	sections[2] = createSection(idArray[2], header[1], content2, GPTImage2(header[1]), GPTsource(header[1]), []string{idArray[9], idArray[10], idArray[11], idArray[12]})

	//node 3
	content3 := GPTResponse(prePrompt2, question, header[2])
	sections[3] = createSection(idArray[3], header[2], content3, GPTImage(header[2]), GPTsource(header[2]), []string{idArray[13], idArray[14], idArray[15], idArray[16]})

	//node 3
	content4 := GPTResponse(prePrompt2, question, header[3])
	sections[4] = createSection(idArray[4], header[3], content4, GPTImage2(header[3]), GPTsource(header[3]), []string{idArray[17], idArray[18], idArray[19], idArray[20]})

	//layer 3-------------------------------------------
	headerString1 := GPTResponse(prePrompt1, header[0], "") //get 4 subsubsection of *subsection 1*
	header1 := stringjsonToArray(headerString1)

	//node 1.1
	content11 := GPTResponse(prePrompt2, question, header1[0])
	sections[5] = createSection(idArray[5], header1[0], content11, GPTImage(header1[0]), GPTsource(header1[0]), []string{})

	//node 1.2
	content12 := GPTResponse(prePrompt2, question, header1[1])
	sections[6] = createSection(idArray[6], header1[1], content12, GPTImage2(header1[1]), GPTsource(header1[1]), []string{})

	//node 1.3
	content13 := GPTResponse(prePrompt2, question, header1[2])
	sections[7] = createSection(idArray[7], header1[2], content13, GPTImage(header1[2]), GPTsource(header1[2]), []string{})

	//node 1.4
	content14 := GPTResponse(prePrompt2, question, header1[3])
	sections[8] = createSection(idArray[8], header1[3], content14, GPTImage2(header1[3]), GPTsource(header1[3]), []string{})

	headerString2 := GPTResponse(prePrompt1, header[1], "") //get 4 subsubsection of *subsection 1*
	header2 := stringjsonToArray(headerString2)

	//node 2.1
	content21 := GPTResponse(prePrompt2, question, header2[0])
	sections[9] = createSection(idArray[9], header2[0], content21, GPTImage(header2[0]), GPTsource(header2[0]), []string{})

	//node 2.2
	content22 := GPTResponse(prePrompt2, question, header2[1])
	sections[10] = createSection(idArray[10], header2[1], content22, GPTImage2(header2[1]), GPTsource(header2[1]), []string{})

	//node 2.3
	content23 := GPTResponse(prePrompt2, question, header2[2])
	sections[11] = createSection(idArray[11], header2[2], content23, GPTImage2(header1[2]), GPTsource(header2[2]), []string{})

	//node 2.3
	content24 := GPTResponse(prePrompt2, question, header2[3])
	sections[12] = createSection(idArray[12], header2[3], content24, GPTImage2(header1[3]), GPTsource(header2[3]), []string{})

	headerString3 := GPTResponse(prePrompt1, header[2], "") //get 4 subsubsection of *subsection 3*
	header3 := stringjsonToArray(headerString3)

	//node 3.1
	content31 := GPTResponse(prePrompt2, question, header3[0])
	sections[13] = createSection(idArray[13], header3[0], content31, GPTImage(header2[0]), GPTsource(header3[0]), []string{})

	//node 3.2
	content32 := GPTResponse(prePrompt2, question, header3[1])
	sections[14] = createSection(idArray[14], header3[1], content32, GPTImage(header2[1]), GPTsource(header3[1]), []string{})

	//node 3.3
	content33 := GPTResponse(prePrompt2, question, header3[2])
	sections[15] = createSection(idArray[15], header3[2], content33, GPTImage(header2[2]), GPTsource(header3[2]), []string{})

	//node 3.4
	content34 := GPTResponse(prePrompt2, question, header3[3])
	sections[16] = createSection(idArray[16], header3[3], content34, GPTImage(header2[3]), GPTsource(header3[3]), []string{})

	//content&1&*1* := GPTResponse(prePrompt2, question, header&1&[*0*])
	//sections[*5*] = createSection(idArray[*5*], header&1&[*0*], content&1&*1*, "", []string{})

	headerString4 := GPTResponse(prePrompt1, header[3], "") //get 4 subsubsection of *subsection 4*
	header4 := stringjsonToArray(headerString4)

	//node 4.1
	content41 := GPTResponse(prePrompt2, question, header4[0])
	sections[17] = createSection(idArray[17], header4[0], content41, GPTImage(header3[0]), GPTsource(header4[0]), []string{})

	//node 4.2
	content42 := GPTResponse(prePrompt2, question, header4[1])
	sections[18] = createSection(idArray[18], header4[1], content42, GPTImage(header3[1]), GPTsource(header4[1]), []string{})

	//node 4.3
	content43 := GPTResponse(prePrompt2, question, header4[2])
	sections[19] = createSection(idArray[19], header4[2], content43, GPTImage(header3[2]), GPTsource(header4[2]), []string{})

	//node 4.4
	content44 := GPTResponse(prePrompt2, question, header4[3])
	sections[20] = createSection(idArray[20], header4[3], content44, GPTImage(header3[3]), GPTsource(header[3]), []string{})

	body.IndentedJSON(http.StatusOK, sections) //reformatts the json to look better and Output
}

func main() {
	router := gin.Default() //creates a new router
	// router := gin.Default()
	// router.GET("/health", healthHandler.Response)
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Replace with your frontend's origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	router.GET("/tree/:question", responseTree) //get request for front end to call

	router.Run("localhost:8080") //base link
}
