/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenHamburguer implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de POllo')
  }
}

class BeefHamburguer implements Hamburger {

  prepare(): void {
    console.log('Preparando hamburguesa de Res')
  }

}

class Water implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de agua')
  }
}

class Soda implements Drink {
  pour(): void {
    console.log('Sirviendo un vaso de gaseosa')
  }
}

interface RestaurantFactory {
  createHamburguer(): Hamburger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburguer(): Hamburger {
    return new BeefHamburguer();
  }
  createDrink(): Drink {
    return new Soda();
  }

}

class HealthyRestaurantFactory implements RestaurantFactory {
  createHamburguer(): Hamburger {
    return new ChickenHamburguer();
  }
  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHamburguer();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}

console.log('Pedido del menu regular')
main(new FastFoodRestaurantFactory());

console.log('Pedido del menu regular')
main(new HealthyRestaurantFactory());