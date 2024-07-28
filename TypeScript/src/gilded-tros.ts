import { Item } from "./item";

export class GildedTros {
  constructor(public items: Array<Item>) {}

  public updateQuality(): void {
    const smellyItems = [
      "Duplicate Code",
      "Long Methods",
      "Ugly Variable Names",
    ];
    for (let i = 0; i < this.items.length; i++) {
      let degrade = 1;
      if (this.items[i].name == "B-DAWG Keychain") {
        continue;
      }
      this.items[i].sellIn -= 1;

      if (this.items[i].sellIn < 0) {
        degrade *= 2;
      }

      if (this.items[i].name == "Good Wine") {
        this.items[i].quality += degrade;
        if (this.items[i].quality > 50) {
          this.items[i].quality = 50;
        }
        continue;
      }

      if (this.items[i].quality <= 0) {
        continue;
      }

      if (this.items[i].name.includes("Backstage passes")) {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
          continue;
        }
        if (this.items[i].sellIn <= 5) {
          this.items[i].quality += 1;
        }
        if (this.items[i].sellIn <= 10) {
          this.items[i].quality += 1;
        }
        this.items[i].quality += 1;

        if (this.items[i].quality > 50) {
          this.items[i].quality = 50;
        }
        continue;
      }

      if (smellyItems.includes(this.items[i].name)) {
        degrade *= 2;
      }

      this.items[i].quality -= degrade;
      if (this.items[i].quality < 0) {
        this.items[i].quality = 0;
      }
    }
  }
}
