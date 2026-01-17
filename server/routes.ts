import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Thank you for your message. We'll be in touch within 24 hours.",
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again.",
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts",
      });
    }
  });

  return httpServer;
}
