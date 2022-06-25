{
    submitGfForm(
      input: {
        formId: 50
        entryMeta {
          createdById: 1 # The user ID.
          ip: ""         # IP address
        }
        fieldValues: [
          {
            # Text field value
            id: 1
            value: "This is a text field value."
          }
          {
            # MultiSelect field value
            id: 2
            values: ["First Choice", "Second Choice"]
          }
          {
            # Address field value
            id: 3
            addressValues: {
              street: "1600 Pennsylvania Avenue NW"
              lineTwo: "Office of the President"
              city: "Washington"
              state: "DC"
              zip: "20500"
              country: "USA"
            }
          }
          {
            # ChainedSelect field value
            id: 4
            chainedSelectValues: [
              { inputId: 4.1, value: "Choice 1" }
              { inputId: 4.2, value: "Choice 2" }
            ]
          }
          {
            # Checkbox field value
            id: 5
            checkboxValues: [
              { inputId: 5.1, value: "This checkbox field is selected" }
              { inputId: 5.2, value: "This checkbox field is also selected" }
            ]
          }
          {
            # Email field value
            id: 6
            emailValues: {
              value: "myemail@email.test"
              confirmationValue: "myemail@email.test" # Only necessary if Email confirmation is enabled.
            }
          }
          {
            # Multi-column List field value
            id: 6
            listValues: { rowValues: ["a", "b", "c"] }
          }
          {
            # Name field value
            id: 7
            nameValues: {
              prefix: "Mr."
              first: "John"
              middle: "Edward"
              last: "Doe"
              suffix: "PhD"
            }
          }
        ]
        saveAsDraft: false # If true, the submission will be saved as a draft entry.
        # Set the following to validate part of a multipage form without saving the submission.
        sourcePage: 1
        targetPage: 0
      }
    ) {
      confirmation {
        type    
        message # The message HTML - if the confirmation type is a "MESSAGE".
        url     # The redirect URL - if the confirmation type is a "REDIRECT".
      }
      errors {
        id # The field that failed validation.
        message
      }
      entry {
        # See docs on querying Entries.
        id
        ... on GfSubmittedEntry {
          databaseId
        }
        ... on GfDraftEntry {
          resumeToken
        }
      }
    }
  }