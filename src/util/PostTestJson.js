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
          "title": "¿Cuánto tiempo le ha dedicado? (Numero de horas totales)",
          "isRequired": true,
          "choices": [
            "Entre 0 a 1 hora",
            "Entre 1 a 2 horas",
            "Entre 2 a 3 horas",
            "Entre 3 a 4 horas",
            "Entre 4 a 5 horas",
            "Entre 5 a 6 horas",
            "Entre 6 a 7 horas",
            "Entre 7 a 8 horas",
            "Entre 8 a 10 horas",
            "Entre 10 a 15 horas",
            "Más de 15 horas"
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
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "rating",
          "name": "activitySatisfaction",
          "title": "En términos generales, consideré que la actividad fue satisfactoria",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "projectValue",
          "title": "¿Qué aspectos del proyecto valoras más positivamente? En otras palabras, ¿qué es lo que más te gustó del proyecto?",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "projectImprovement",
          "title": "¿Qué piensas que puede mejorarse?",
          "isRequired": true
        }
      ],
      "title": "Satisfacción y propuesta de mejora"
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  "widthMode": "static", // Tamaño de la encuesta
  "width": "1000px" // Tamaño de la encuesta
}