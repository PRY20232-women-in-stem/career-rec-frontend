export const preTestJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "boolean",
          "name": "freeTimeActivities",
          "title": "Piensa en las actividades que te gusta hacer en tu tiempo libre. Indica si alguna de ellas está relacionada con la ciencia, la tecnología, la ingeniería o las matemáticas.",
          "isRequired": true,
          "labelTrue": "Sí"
        },
        {
          "type": "rating",
          "name": "subjectInterestMath",
          "title": "Indica qué tan interesada está en Matemáticas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "subjectInterestSci",
          "title": "Indica qué tan interesada está en Ciencias (Biología, Geología, Física y Química)",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "subjectInterestTech",
          "title": "Indica qué tan interesada está en las áreas de Tecnología",
          "isRequired": true
        }
      ],
      "title": "Interés en STEM"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "rating",
          "name": "selfPerceptionMath",
          "title": "Indica qué tan buena eres en la materia de Matemáticas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "selfPerceptionSci",
          "title": "Indica qué tan buena eres en las materias de Ciencias (Biología, Geología, Física y Química)",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "selfPerceptionTech",
          "title": "Indica qué tan buena eres en las áreas de Tecnología",
          "isRequired": true
        }
      ],
      "title": "Autopercepción"
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  // "widthMode": "static", // Tamaño de la encuesta
  // "width": "1000px" // Tamaño de la encuesta
}