package main

import (
	//general
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"//unique key

	//ChatGPT needed
	"context"
	"fmt"
	openai "github.com/sashabaranov/go-openai"

	"encoding/json" //convert stringJSOn to json

)

type Section struct {
	UniqueID string   `json:"uniqueID"`
	Header   string   `json:"Header"`
	Content  string   `json:"Content"`
	Image    string   `json:"Image"`
	Children []string `json:"Children"` // References other uniqueIDs
}


func createSection(uniqueID string, header string, content string, image string, children []string) Section {
	return Section{
		UniqueID: uniqueID,
		Header:   header,
		Content:  content,
		Image:    image,
		Children: children,
	}
}

func GPTResponse( prePrompt string, question string, content string) string {
	// Concatenate full prompt
	fullPrompt := prePrompt + "\n" + question + "\n" + content

	client := openai.NewClient("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")
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT4, // Correct model name is "gpt-4"
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

	return array; 
}

//Input: User Question 
//Output: Json tree (1 x 4 x 4 )
//Logic:
	//1. Get 4 subsection
	//2. get 16 subsection from the 4 subsection
	//3. paragraph for each of the 16 subsection

//Logic for one  endpoint
func responseTree(body *gin.Context) {//the context client calls 
	question := body.Param("question") //gets the question from the client(.../tree/"teach me about biology")


	var sections [21]Section

	var idArray [21]string
	for i := 0; i < 21; i++ {
		idArray[i] = uuid.New().String() // Generate and store the unique ID
	}

	//layer 1
	sections[0] = createSection(idArray[0], question, "", "", []string{idArray[1], idArray[2], idArray[3], idArray[4]})


	//layer 2
	//createSection(uniqueID string, header string, content string, image string, children []string)
	prePrompt1 := "You are an expert at breaking down complex topics into digestible sections. Please create a structured response with 4 main sections. Response by conpleting the JSON format structurer below  {\"sub1\": , \"sub2\": , \"sub3\": , \"sub4\": }."
	headerString := GPTResponse(prePrompt1, question, "")
	header := stringjsonToArray(headerString)

	prePrompt2 := "Explain this the point in more in under 100 words that is related to the question "

	//node 1
	content1 := GPTResponse(prePrompt2, question, header[0])
	sections[1] = createSection(idArray[1], header[0], content1, "", []string{})

	//node 2
	content2 := GPTResponse(prePrompt2, question, header[1])
	sections[2] = createSection(idArray[2], header[1], content2, "", []string{})

	//node 3
	content3 := GPTResponse(prePrompt2, question, header[2])
	sections[3] = createSection(idArray[3], header[2], content3, "", []string{})

	//node 3
	content4 := GPTResponse(prePrompt2, question, header[3])
	sections[4] = createSection(idArray[4], header[3], content4, "", []string{})



	body.IndentedJSON(http.StatusOK, sections) //reformatts the json to look better and Output
}



func main() {
	// router := gin.Default()
	// router.GET("/health", healthHandler.Response)
	
	router := gin.Default() //creates a new router
	router.GET("/tree/:question", responseTree) //get request for front end to call
	
	router.Run("localhost:8080")//base link
}

