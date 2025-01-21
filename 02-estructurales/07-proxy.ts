/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

class Player {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

interface Room {
  enter(player: Player): void;
}

class SecretRoom implements Room {
  enter(player: Player): void {
    console.log(`Bienvenido a la sala secreta, ${player.name}`);
    console.log('Un gran enemigo te espera')
  }
}

// 3. Clase Proxy - Magic Portal
class MagicPortal implements Room {
  private secretRom: Room;

  constructor(room: Room) {
    this.secretRom = room;
  }

  enter(player: Player): void {
    if(player.level >= 10) {
      this.secretRom.enter(player);
      return;
    }

    console.log(`No puedes ingresar ${player.name}, tu nivel ${player.level} es bajo`)
  }
}

function main(){
  const portal = new MagicPortal(new SecretRoom())  //Proxy

  const player1 = new Player('Aventurero A', 5);
  const player2 = new Player('Aventurero B', 15);

  console.log('Aventurero A intenta entrar al portal')
  portal.enter(player1);

  console.log('\nAventurero B intenta entrar al portal')
  portal.enter(player2);

};

main();