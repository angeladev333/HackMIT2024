package main

import (
	"encoding/json"
	"fmt"

	"github.com/google/uuid"
)

type Section struct {
	UniqueID string   `json:"uniqueID"`
	Header   string   `json:"Header"`
	Content  string   `json:"Content"`
	Image    string   `json:"Image"`
	Children []string `json:"Children"` // References other uniqueIDs
}


func createSection(header, content, image string, children []string) Section {
	// Generate a new UUID as the unique ID
	uniqueID := uuid.New().String()

	return Section{
		UniqueID: uniqueID,
		Header:   header,
		Content:  content,
		Image:    image,
		Children: children,
	}
}