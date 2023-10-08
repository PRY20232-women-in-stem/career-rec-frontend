export const postTestJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "comment",
          "name": "projectParticipation",
          "title": "Explique en qué consistió su participación en el proyecto. ¿Qué hiciste?",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "projectTimeSpent",
          "title": "¿Cuánto tiempo le ha dedicado?",
          "isRequired": true,
          "choices": [
            "Entre 0 a 5 minutos",
            "Entre 10 a 20 minutos",
            "Entre 25 a 35 minutos",
            "Entre 40 a 50 minutos",
            "Entre 55 a 60 minutos"
          ]
        }
      ],
      "title": "Medida de participación"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "rating",
          "name": "interestStemFields",
          "title": "Ahora estoy más interesada en la ciencia, tecnología, ingeniería o matemáticas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "futureInterestStem",
          "title": "Ahora estoy más interesada que antes en estudiar los campos STEM en el futuro",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "learnNewInfo",
          "title": "La actividad me ha permitido conocer nueva información sobre estas profesiones",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "perceptionWomenStem",
          "title": "Después de la actividad, creo que las mujeres podrían involucrarse más en las profesiones STEM",
          "isRequired": true
        }
      ],
      "title": "Impacto en estudiantes"
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  "widthMode": "static", // Tamaño de la encuesta
  "width": "1000px" // Tamaño de la encuesta
}