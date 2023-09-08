export const testVocacionalJson = {
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question5",
          "title": {
            "default": "Encuentro las matemáticas complicadas.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question6",
          "title": {
            "default": "Siento atracción por las matemáticas.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question7",
          "title": {
            "default": "Me gustaría a enfrentar problemas matemáticos más complejos en el futuro.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question8",
          "title": {
            "default": "Doy mi mejor esfuerzo en los exámenes de matemáticas debido a mi interés en esta área.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question9",
          "title": {
            "default": "Tengo la capacidad de obtener calificaciones altas en matemáticas.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question10",
          "title": {
            "default": "Pienso que mejoraré mis destrezas si me uno a un grupo de estudio, taller o tutoría enfocados en matemáticas.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question11",
          "title": {
            "default": "Puedo emplear las matemáticas con facilidad para resolver situaciones cotidianas.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question12",
          "title": {
            "default": "Deseo eventualmente participar en un empleo que involucre el uso de las matemáticas.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question13",
          "title": {
            "default": "Considero que comprender las matemáticas será crucial en mi trayectoria profesional.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
      ],
    },
    {
      "name": "page3",
      "title": "Percepción de las Ciencias",
      "elements": [
        {
          "type": "rating",
          "name": "question14",
          "title": {
            "default": "Disfruto realizando proyectos relacionados con la ciencia.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question15",
          "title": {
            "default": "Podría optar por una profesión en el ámbito científico.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question16",
          "title": {
            "default": "He participado o participo en eventos como concursos, ferias o grupos de ciencias porque tengo aspiraciones profesionales en ese campo.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question17",
          "title": {
            "default": "No tengo afinidad por la ciencia.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question18",
          "title": {
            "default": "Considero que adquirir conocimientos en ciencias me abrirá oportunidades laborales prometedoras.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question19",
          "title": {
            "default": "Hago el esfuerzo de obtener buenas notas en los cursos de ciencias debido a mi interés en empleos relacionados con esta área.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question20",
          "title": {
            "default": "Encuentro las ciencias desafiantes.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question21",
          "title": {
            "default": "No creo que la ciencia sea útil para resolver situaciones del día a día.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question22",
          "title": {
            "default": "Pienso que la ciencia tendrá un papel relevante en mi trayectoria profesional.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question23",
          "title": {
            "default": "Estaría dispuesto(a) a unirme a talleres, clubes o tutorías en ciencias porque sé que comprenderla será fundamental en mi carrera.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
      ],
    },
    {
      "name": "page4",
      "title": "Percepción de la Tecnología",
      "elements": [
        {
          "type": "rating",
          "name": "question24",
          "title": {
            "default": "No tengo destrezas en la construcción o reparación de objetos.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question25",
          "title": {
            "default": "Mediante la elección de estudios en ingeniería, tecnología o campos relacionados, podré contribuir a la mejora de objetos de uso cotidiano.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question26",
          "title": {
            "default": "Utilizo aparatos tecnologícos porque entiendo que estas habilidades serán cruciales en mi trabajo futuro.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question27",
          "title": {
            "default": "Creo que puedo alcanzar éxito en campos como ingeniería, tecnología u ocupaciones afines.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question28",
          "title": {
            "default": "Entiendo que mis habilidades en matemáticas y ciencias me facilitaran la mejora de herramientas útiles.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question29",
          "title": {
            "default": "Los conocimientos adquiridos en proyectos prácticos, como puentes, vehículos o robots, me beneficiarán en mi empleo futuro.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question30",
          "title": {
            "default": "Siento curiosidad por comprender cómo opera la tecnología.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question31",
          "title": {
            "default": "No considero que los conocimientos en ingeniería o tecnología sean importantes para mi trayectoria profesional.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question32",
          "title": {
            "default": "Me gustaría inscribirme en más cursos relacionados a ingeniería o tecnología.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
        {
          "type": "rating",
          "name": "question33",
          "title": {
            "default": "Busco involucrarme en los campos de matematicas, tecnología y ciencias para perfeccionar mis habilidades en la resolución de problemas para mi futuro trabajo.",
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
          "rateMin": 1,
          "minRateDescription": {
            "default": "Muy en desacuerdo",
          },
          "maxRateDescription": {
            "default": "Muy de acuerdo",
          }
        },
      ],
    }
  ],
  "showPrevButton": false,
  "showQuestionNumbers": "off",
  "widthMode": "static",// Tamaño de la encuesta
  "width": "1000px" // Tamaño de la encuesta
}