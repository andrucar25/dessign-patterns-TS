/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Projector {
  turnOn() {
    console.log('Proyecto encendido')
  }

  turnOff() {
    console.log('Proyecto apagado')
  }
}

class SoundSystem {
  
  on() {
    console.log('Sistema de sonido encendido');
  }
  
  off() {
    console.log('Sistema de sonido apagado');
  }

}

class VideoPlayer {
  on() {
    console.log('Video Player encendido');
  }

  play(movie: string) {
    console.log(`Reproduciendo ${movie}`);
  }

  stop(){
    console.log('Pelicula detenida');
  }

  off(){
    console.log('Video Player apagado');
  }

}

class PopcornMaker {
  popingPopcorn(){
    console.log('Haciendo palomitas');
  }

  stopPopingPopcorn(){
    console.log('Deteniendo palomitas');
  }
}

interface HomeTheaterFacadeOptions {
   projector: Projector;
   soundSystem: SoundSystem;
   videoPlayer: VideoPlayer;
   popcornMaker: PopcornMaker;
}
class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornMaker: PopcornMaker;

  constructor({popcornMaker, videoPlayer, soundSystem,projector }: HomeTheaterFacadeOptions) {
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
    this.popcornMaker = popcornMaker;
  }

  watchMovie(movie: string): void {
    console.log('Preparando para ver la pelicula');
    this.projector.turnOn();
    this.soundSystem.on();
    this.popcornMaker.popingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(`${movie}`);

    console.log('Disfrute la pelicula')
  }

  endWatchingMovie(): void {
    console.log('\nPreparando para detener la pelicula');
    this.projector.turnOff();
    this.soundSystem.off();
    this.popcornMaker.stopPopingPopcorn();
    this.videoPlayer.stop();
    this.videoPlayer.off()

    console.log('\nSistema apagado')
  }
}

function main() {
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();
  const popcornMaker = new PopcornMaker();

  const homeTheater = new HomeTheaterFacade({
    projector,
    soundSystem,
    videoPlayer,
    popcornMaker
  });

  homeTheater.watchMovie('Avengers');
  homeTheater.endWatchingMovie();
}

main();