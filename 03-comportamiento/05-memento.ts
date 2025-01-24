/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

class GameMemento {

  private level: number;
  private health: number;
  private position: string;

  constructor(level: number, health: number, position: string){
    this.level = level;
    this.health = health;
    this.position = position;
  }

  getLevel() {
    return this.level;
  }

  getHealth() {
    return this.health;
  }

  getPosition() {
    return this.position;
  }

}


class Game {

  private level: number = 1;
  private health: number = 100;
  private position: string = 'Inicio';

  constructor(){

    console.log(`JUgando en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `)
  }

  save(): GameMemento {
    return new GameMemento(this.level, this.health, this.position);
  }

  play(level: number, health: number, position: string):void {
    this.level = level;
    this.health = health;
    this.position = position;

    console.log (
      `Jugando en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `
    )
  }

  restore(memento: GameMemento):void {
    this.level = memento.getLevel();
    this.health = memento.getHealth();
    this.position = memento.getPosition();

    console.log (
      `\nProgreso restauraod

      Restauracion en el nivel ${this.level}
        salud: ${this.health}
        posicion: ${this.position}
      `
    )
  }

}

class GameHistory {
  private mementos: GameMemento[] = [];

  push(memento: GameMemento) {
    this.mementos.push(memento);
  }

  pop(): GameMemento | null {
    return this.mementos.pop() ?? null
  }
}

function main() {
  const game = new Game();
  const history = new GameHistory();

  history.push(game.save())

  //Jugador avanza en el juego
  game.play(2, 90, 'Bosque');
  history.push(game.save());

  game.play(3, 70, 'Cueva oscura');
  history.push(game.save());

  game.play(4, 50, 'Castillo del dragon');
  console.log('\nEstado actual');

  game.restore(history.pop()!);
  console.log('\nDespues de restaurar el ultimo Estado guardado');

  game.restore(history.pop()!);
  console.log('\nDespues de restaurar el ultimo Estado guardado');

}

main();