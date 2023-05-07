# Minecraft API for Web

## Usage

```
GET https://minecraft.api.gammatrees.com/java/1.0.0/block/stone

{
    "id": 1,
    "name": "stone",
    "displayName": "Stone"
    "hardness": 1.5,
    "stackSize": 64,
    "minable": true,
    "resistance": 6.0,
    "miningLevel": 0,
    "harvestTools": ["pickaxe"],
    "luminous": false,
    "transparent": false,
    "flammable": false,
    "rarity": "common",
    "fireSpreading": false,
    "drops": [
        {
            "name": "stone",
            "id": 1,
            "min": 1,
            "max": 1
        },
        {
            "name": "cobblestone",
            "id": 2,
            "min": 1,
            "max": 1
        }
    ],
    "texture": {
        "top": "minecraft:stone",
        "bottom": "minecraft:stone",
        "side": "minecraft:stone"
    }
}
```

```
GET https://minecraft.api.gammatrees.com/be/1.0.0/item/wooden_sward

{
    "id": 10,
    "name": "wooden_sward",
    "displayName": "Wooden Sward",
    "durability": 60,
    "stackSize": 1,
    "rarity": "common",
    "texture": "minecraft:wooden_sward"
}
```
