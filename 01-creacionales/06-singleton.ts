/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {

  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls()
      console.log('Las esferas del dragon han sido creadas');
    }

    return DragonBalls.instance;
  }

  collectBall(): void {
    if(this.ballsCollected < 7){
      this.ballsCollected++;
      console.log(`ESferas recolectadas ${this.ballsCollected}`)
      return;
    }

    console.log('Ya se recolectaron las 7 esferas del dragon');
  }

  summonShenLong() {
    if(this.ballsCollected === 7) {
      console.log('Shenlong invocado')
      this.ballsCollected = 0;
      
      return
    }

    console.log(`\nAun faltan ${7 - this.ballsCollected} esferas`)
  }
}


function main() {
  
  const gokuDragonBalls = DragonBalls.getInstance()

  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();

  gokuDragonBalls.summonShenLong();

  const vegetaDragonBalls = DragonBalls.getInstance()

  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();

  gokuDragonBalls.summonShenLong();

  vegetaDragonBalls.summonShenLong();

}

main()