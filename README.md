# Реализовать блок Progress

<font color="blue">Задача</font>
Разработать прототип блока Progress для использования в мобильных web-приложениях. Основное предназначение блока отображать процесс выполнения процессов и их прогресс 
выполнения.

 <font color="blue">Особенности</font>

* Блок должен иметь API для управления его состоянием. 
* Блок должен быть спроектирован так, чтобы его было легко переиспользовать в других приложениях. 
* Состояния: 
    * Normal – базовое состояние, в котором путём задания Value можно управлять размером дуги, отражающей некоторый параметр или прогресс процесс. Начало дуги соответствует 12 часам, конец дуги при увеличении параметра Value движется по направлению часовой стрелки и достигает начала при значении 100. 
    * Animated – независимое состояние, при котором блок или его элементы начинают вращаться с некоторым периодом по часовой стрелке. 
    * Hidden – состояние скрывающее блок со страницы. 
* Результат выполнения задачи должен быть представлен в виде небольшого приложения с элементами управления (Value – текстовый ввод числа от 0 до 100, Animate и Hide – логические переключатели on / off, см. Макеты ). 
* Приложение должно быть адаптирующимся под ориентацию экрана – будет большим плюсом. 
* Фиолетовые штрихпунктирные линии – вспомогательные линии для облегчения вёрстки

<font color="blue">Технологии</font>
 
* JS (без jQuery и других библиотек / фреймворков, упрощающих и дополняющих функциональность окружения браузера). 
* CSS или любые другие пре/постпроцессоры. 
* HTML (без использования шаблонизаторов).

<font color="blue">Примечания к выполнению</font>

Задача считается выполненной, если её можно открыть на телефоне по публичной ссылке на https://pages.github.com/

<font color="blue">Макеты</font>

![layout]()
 