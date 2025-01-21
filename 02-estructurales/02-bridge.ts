/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  use(): void {
    console.log('Ataca con una espada');
  }
}

class AxeAttack implements Ability {
  use(): void {
    console.log('Ataca con una hacha');
  }
}

class MagicSpell implements Ability {
  use(): void {
    console.log('Lanza un hechizo magico');
  }
}

class FireballSpell implements Ability {
  use(): void {
    console.log('Lanza una bola verde');
  }
}
abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract performAbility(): void

}

class Warrior extends Character {

    override performAbility(): void {
      console.log('\nEl guerrero esta listo para luchar');
      this.ability.use();
    }
  
}

class Mage extends Character {

  override performAbility(): void {
    console.log('\nEl mago prepara su magia');
    this.ability.use();
  }

}

function main(){
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();

  warrior.setAbility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage( new FireballSpell());
  mage.performAbility();

}

main();