L'estat final ha quedat tot el sistema de labels implemetat. Quan es crea una pregunta
es demana quina és la seva subject (amb un desplegable on apareixen totes les subjects)
per a atribuir-li com a label. I després al mostrar el llistat de preguntes es poden filtrar
per assignatures (amb el mateix desplegable) i només es mostren les de l'assignatura 
seleccionada. Si no es selecciona cap assignatura, es mostren totes les preguntes.

He afegit al model question un atribut per a que guardi la id de l'assignatura
i he canviat el model de subject.
