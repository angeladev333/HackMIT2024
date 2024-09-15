package main

import (
	//"encoding/json"
	//"fmt"

	"github.com/google/uuid"//unique key

	//ChatGPT needed
	"context"
	"fmt"
	openai "github.com/sashabaranov/go-openai"
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

func GPTResponse(question string, prePrompt string, content string) string {
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

func main() {//responseTree
	var sections [21]Section

	var myArray [21]string
	for i := 0; i < 21; i++ {
		myArray[i] = uuid.New().String() // Generate and store the unique ID
	}

	question := "teach me biology" //replace later with Param call

	//layer 1
	sections[0] = createSection(question, "", "", []string{})




    // lol := createSection("header", "content", "image", []string{"child1", "child2"})
    // fmt.Printf("UniqueID: %s\n", lol.UniqueID)
    // fmt.Printf("Header: %s\n", lol.Header)
    // fmt.Printf("Content: %s\n", lol.Content)
    // fmt.Printf("Image: %s\n", lol.Image)
    // fmt.Printf("Children: %v\n", lol.Children)
	fmt.Printf(sections[0].Header)
}

