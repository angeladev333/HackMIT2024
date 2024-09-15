package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Apply the CORS middleware
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Replace with your frontend's origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Define a route for /tree/:question
	router.GET("/tree/:question", responseTree)

	// Start the server on localhost:8080
	router.Run("localhost:8080")
}

func responseTree(c *gin.Context) {
	question := c.Param("question")
	// Simulate some logic to respond based on the question
	c.JSON(http.StatusOK, gin.H{
		"message": "Response to question: " + question,
	})
}
