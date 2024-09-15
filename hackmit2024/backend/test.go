package main

import (
	"encoding/json"
	"fmt"
)

type Section struct {
	UniqueID string   `json:"uniqueID"`
	Header   string   `json:"Header"`
	Content  string   `json:"Content"`
	Image    string   `json:"Image"`
	Children []string `json:"Children"` // References other unique IDs
}

// Function to generate the base 21 sections
func createSections() map[string]*Section {
	sections := make(map[string]*Section)

	// Create sections with unique IDs and basic data
	for i := 0; i < 21; i++ {
		sections[fmt.Sprintf("uniqueID-%d", i)] = &Section{
			UniqueID: fmt.Sprintf("uniqueID-%d", i),
			Header:   fmt.Sprintf("Section Header %d", i),
			Content:  fmt.Sprintf("This is content for section %d", i),
			Image:    fmt.Sprintf("image-%d.jpg", i),
			Children: []string{},
		}
	}

	// Add 1-4 as children of section 0
	sections["uniqueID-0"].Children = append(sections["uniqueID-0"].Children, "uniqueID-1", "uniqueID-2", "uniqueID-3", "uniqueID-4")

	// Add 5-20 as children of sections 1-4, by 4s
	sections["uniqueID-1"].Children = append(sections["uniqueID-1"].Children, "uniqueID-5", "uniqueID-6", "uniqueID-7", "uniqueID-8")
	sections["uniqueID-2"].Children = append(sections["uniqueID-2"].Children, "uniqueID-9", "uniqueID-10", "uniqueID-11", "uniqueID-12")
	sections["uniqueID-3"].Children = append(sections["uniqueID-3"].Children, "uniqueID-13", "uniqueID-14", "uniqueID-15", "uniqueID-16")
	sections["uniqueID-4"].Children = append(sections["uniqueID-4"].Children, "uniqueID-17", "uniqueID-18", "uniqueID-19", "uniqueID-20")

	return sections
}

// Function to generate 4 sections from a question
func generate4SectionsFromQuestion(question string) []Section {
	sections := make([]Section, 4)

	// Creating 4 sections based on the question
	for i := 0; i < 4; i++ {
		sections[i] = Section{
			UniqueID: fmt.Sprintf("generatedID-%d", i),
			Header:   fmt.Sprintf("Header for section %d", i),
			Content:  fmt.Sprintf("Generated content for '%s' in section %d", question, i),
			Image:    fmt.Sprintf("generatedImage-%d.jpg", i),
			Children: []string{},
		}
	}

	return sections
}

// Function to generate 16 subsections from a question and store in sections 5-20
func generate16SubsectionsFromQuestion(question string, sections map[string]*Section) {
	//subsections := generate4SectionsFromQuestion(question)

	// Distribute 16 subsections to sections 5-20
	for i := 5; i <= 20; i++ {
		sections[fmt.Sprintf("uniqueID-%d", i)] = &Section{
			UniqueID: fmt.Sprintf("uniqueID-%d", i),
			Header:   fmt.Sprintf("Subsection Header %d", i),
			Content:  fmt.Sprintf("Subsection content for '%s' in section %d", question, i),
			Image:    fmt.Sprintf("subImage-%d.jpg", i),
			Children: []string{}, // Could add further children if needed
		}
	}
}

// Main function
func main() {
	// Create 21 sections
	sections := createSections()

	// Input question
	question := "Teach me about biology"

	// Generate 4 sections and store in sections 1-4
	section4 := generate4SectionsFromQuestion(question)
	for i := 1; i <= 4; i++ {
		sections[fmt.Sprintf("uniqueID-%d", i)] = &section4[i-1]
	}

	// Generate 16 subsections and store in sections 5-20
	generate16SubsectionsFromQuestion(question, sections)

	// Output the tree structure
	jsonData, _ := json.MarshalIndent(sections, "", "  ")
	fmt.Println(string(jsonData))
}
