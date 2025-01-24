/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */

interface MovementStrategy {
  move(): void;
}

//Estrategia #1 - rapida pero costosa
class SwimFast implements MovementStrategy {
  move(): void {
    console.log('El pato nada sobre el agua \n')
  }
}

//Estrategia #2 - no tan rapida pero no tan costosa
class FlyOverWater implements MovementStrategy {
  move(): void {
    console.log('El pato vuela sobre el agua \n')
  }
}

//Estrategia #3 - lenta y economica
class WalkClumsily implements MovementStrategy {
  move(): void {
    console.log('El pato camina \n')
  }
}

class Duck {
  private name: string;
  private movementStrategy: MovementStrategy;

  constructor(name: string, strategy: MovementStrategy) {
    this.name = name;
    this.movementStrategy = strategy;

    console.log(`${name} listo para competir`)
  }

  performMove() {
    console.log(`${this.name} se prepara para moverse`)
    this.movementStrategy.move();
  }
  
  setMovementStrategy(strategy: MovementStrategy) {
    this.movementStrategy = strategy;
    console.log(`${this.name} cambio de estrategia`)
  }

}

function main() {
  const duck1 = new Duck('Patito rapido', new SwimFast());
  const duck2 = new Duck('Patito volador', new FlyOverWater());
  const duck3 = new Duck('Patito torpe', new WalkClumsily());

  console.log(`Comienza la carrera de patos`);
  duck1.performMove();
  duck2.performMove();
  duck3.performMove();

  duck3.setMovementStrategy(new FlyOverWater())
  duck3.performMove();

  duck3.setMovementStrategy(new SwimFast())
  duck3.performMove();

}

main();