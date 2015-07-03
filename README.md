DiceRoller
==========

Simple RPG dice roller written in Javascript.
It supports common dice notation, including Fudge dice notation (dF), for example:
3d6,
2d20-5,
1d100,
4dF,
etc.

Example of using:
```js
var dr = new DiceRoller('3d6');
dr.roll();
// Output: 12

dr.roll('d20');
// Output: 19
```
