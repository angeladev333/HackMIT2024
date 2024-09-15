package main

import (
	//general
	"net/http"
	"github.com/gin-gonic/gin"

	//ChatGPT needed
	"context"
	"fmt"
	openai "github.com/sashabaranov/go-openai"

)

//Input: User Question 
//Output: Json tree (1 x 4 x 4 )
//Logic:
	//1. Get 4 subsection
	//2. get 16 subsection from the 4 subsection
	//3. paragraph for each of the 16 subsection

//Logic for one  endpoint
func responseTree(body *gin.Context) {//the context client calls 
	question := body.Param("question") //gets the question from the client(.../tree/"teach me about biology")
	prePrompt := "You are an expert at breaking down complex topics into digestible sections. Please create a structured response with 4 main sections and 16 subsections. Provide a paragraph of for each of 16 subsections. response only in JSON format. "
	fullPrompt := prePrompt + question

	//Logic 1 for GPT
	client := openai.NewClient("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")
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
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
		return
	}

	body.IndentedJSON(http.StatusOK, resp.Choices[0].Message.Content) //reformatts the json to look better and Output
}

func main() {
	// router := gin.Default()
	// router.GET("/health", healthHandler.Response)
	
	router := gin.Default() //creates a new router
	router.GET("/tree/:question", responseTree) //get request for front end to call
	
	router.Run("localhost:8080")//base link
}

