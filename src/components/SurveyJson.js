export const surveyJson = {
  "completedHtmlOnCondition": [
    {
      "html": {
        "default": "Thanks for your feedback! We highly value all ideas and suggestions from our customers, whether they're positive or critical. In the future, our team might reach out to you to learn more about how we can further improve our product so that it exceeds your expectations.",
      }
    }
  ],
  "pages": [
    {
      "name": "page1",
      "title": "Información personal",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question1",
          "title": "¿Autoriza usted el tratamiento de sus datos personales con fines académicos?",
          "isRequired": true,
          "choices": [
            {
              "value": "Acepto",
              "text": "Acepto"
            },
            {
              "value": "No acepto",
              "text": "No acepto"
            }
          ]
        },
        {
          "type": "text",
          "name": "question2",
          "title": "Fecha de nacimiento",
          "isRequired": true,
          "inputType": "date"
        },
        {
          "type": "radiogroup",
          "name": "question3",
          "title": {
            "default": "Género",
          },
          "isRequired": true,
          "choices": [
            {
              "value": "Femenino",
              "text": "Femenino"
            },
            {
              "value": "Masculino",
              "text": "Masculino"
            },
            {
              "value": "Otro",
              "text": "Otro"
            }
          ]
        }
      ],
    },
    {
      "name": "page2",
      "title": "Percepción de las Matemáticas",
      "elements": [
        {
          "type": "rating",
          "name": "question4",
          "title": {
            "default": "No disfruto de los juegos que involucran lógica o matemáticas.",
          },
          "isRequired": true,
          "autoGenerate": false,
          "rateValues": [
            {
              "value": 1,
              "text": "1"
            },
            {
              "value": 2,
              "text": "2"
            },
            {
              "value": 3,
              "text": "3"
            },
            {
              "value": 4,
              "text": "4"
            },
            {
              "value": 5,
              "text": "5"
            }
          ],
          "rateMin": 0,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        }
      ],
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "rating",
          "name": "question14",
          "title": {
            "default": "No disfruto de los juegos que involucran lógica o matemáticas.",
          },
          "isRequired": true,
          "autoGenerate": false,
          "rateValues": [
            {
              "value": 0,
              "text": "1"
            },
            {
              "value": 1,
              "text": "2"
            },
            {
              "value": 2,
              "text": "3"
            },
            {
              "value": 3,
              "text": "4"
            },
            {
              "value": 4,
              "text": "5"
            }
          ],
          "rateMin": 0,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        }
      ],
      "title": "Percepción de las Ciencias"
    },
    {
      "name": "page4",
      "elements": [
        {
          "type": "rating",
          "name": "question24",
          "title": {
            "default": "No disfruto de los juegos que involucran lógica o matemáticas.",
          },
          "isRequired": true,
          "autoGenerate": false,
          "rateValues": [
            {
              "value": 0,
              "text": "1"
            },
            {
              "value": 1,
              "text": "2"
            },
            {
              "value": 2,
              "text": "3"
            },
            {
              "value": 3,
              "text": "4"
            },
            {
              "value": 4,
              "text": "5"
            }
          ],
          "rateMin": 0,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        }
      ],
      "title": "Percepción de la Tecnología"
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  "widthMode": "static",
  "width": "1000px"
}