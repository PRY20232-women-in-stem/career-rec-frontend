export const preTestJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "boolean",
          "name": "question1",
          "title": "Piensa en las actividades que te gusta hacer en tu tiempo libre. Indica si alguna de ellas está relacionada con la ciencia, la tecnología, la ingeniería o las matemáticas.",
          "isRequired": true,
          "labelTrue": "Sí"
        },
        {
          "type": "rating",
          "name": "question2",
          "title": "Indica qué tan interesada está en Matématicas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "question3",
          "title": "Indica qué tan interesada está en Biología y Geología",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "question4",
          "title": "Indica qué tan interesada está en Física y Química",
          "isRequired": true
        }
      ],
      "title": "Interés STEM"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "rating",
          "name": "question5",
          "title": "Indica qué tan buena eres en la materia de Matématicas",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "question6",
          "title": "Indica qué tan buena eres en las materias de Biología y Geología",
          "isRequired": true
        },
        {
          "type": "rating",
          "name": "question7",
          "title": "Indica qué tan buena eres en las materias de Física y Química",
          "isRequired": true
        }
      ],
      "title": "Autopercepción"
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "dropdown",
          "name": "question8",
          "title": "Indica tu nota en la última evaluación de la materia de Matemática",
          "isRequired": true,
          "searchEnabled": false,
          "choices": [
            "Entre 0 y 4",
            "Entre 5 y 8",
            "Entre 9 y 11",
            "Entre 12 y 14",
            "Entre 15 y 17",
            "Entre 18 y 20",
            "No llevo este curso"
          ],
          "allowClear": false,
        },
        {
          "type": "dropdown",
          "name": "question9",
          "title": "Indica tu nota en la última evaluación de la materia de Biología y Geología",
          "isRequired": true,
          "searchEnabled": false,
          "choices": [
            "Entre 0 y 4",
            "Entre 5 y 8",
            "Entre 9 y 11",
            "Entre 12 y 14",
            "Entre 15 y 17",
            "Entre 18 y 20",
            "No llevo este curso"
          ],
          "allowClear": false,
        },
        {
          "type": "dropdown",
          "name": "question10",
          "title": "Indica tu nota en la última evaluación de la materia de Física y Química",
          "isRequired": true,
          "searchEnabled": false,
          "choices": [
            "Entre 0 y 4",
            "Entre 5 y 8",
            "Entre 9 y 11",
            "Entre 12 y 14",
            "Entre 15 y 17",
            "Entre 18 y 20",
            "No llevo este curso"
          ],
          "allowClear": false,
        }
      ],
      "title": "Logros en cursos STEM"
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  "widthMode": "static", // Tamaño de la encuesta
  "width": "1000px" // Tamaño de la encuesta
}