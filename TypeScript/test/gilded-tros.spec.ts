import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";

describe("GildedTrosTest", () => {
  //General
  it("should lower sellIn by 1 and degrade quality by 1", () => {
    const items: Item[] = [new Item("Ring of Cleansening Code", 10, 20)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].sellIn).toEqual(9);
    expect(app.items[0].quality).toEqual(19);
  });

  it("should not have a quality below 0", () => {
    const items: Item[] = [new Item("Ring of Cleansening Code", 10, 0)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).not.toEqual(-1);
  });

  it("should decrease twice as fast when sell by date has passed", () => {
    const items: Item[] = [new Item("Ring of Cleansening Code", -1, 10)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(8);
  });

  //Good Wine
  it("should increase quality", () => {
    const items: Item[] = [new Item("Good Wine", 10, 0)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(1);
  });

  it("should increase twice as fast when sell by date has passed", () => {
    const items: Item[] = [new Item("Good Wine", -1, 0)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(2);
  });

  it("should not have a quality over 50", () => {
    const items: Item[] = [new Item("Good Wine", 10, 50)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).not.toEqual(51);
  });

  //B-DAWG Keychain
  it("should not change the quality", () => {
    const items: Item[] = [new Item("B-DAWG Keychain", 10, 80)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).not.toEqual(79);
  });

  //Backstage passes
  it("should increase quality depending on sellBy", () => {
    const items: Item[] = [
      new Item("Backstage passes for Re:Factor", 15, 20),
      new Item("Backstage passes for Re:Factor", 10, 20),
      new Item("Backstage passes for Re:Factor", 5, 20),
    ];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(21);
    expect(app.items[1].quality).toEqual(22);
    expect(app.items[2].quality).toEqual(23);
  });
  it("should have a quality of 0", () => {
    const items: Item[] = [new Item("Backstage passes for Re:Factor", 0, 20)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(0);
  });

  //Smelly Items
  it("should degrade twice as fast", () => {
    const items: Item[] = [
      new Item("Duplicate Code", 3, 6),
      new Item("Duplicate Code", -1, 6),
    ];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].quality).toEqual(4);
    expect(app.items[1].quality).toEqual(2);
  });
});
