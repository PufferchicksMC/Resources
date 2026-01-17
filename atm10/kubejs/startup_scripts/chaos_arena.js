StartupEvents.registry('block', event => {
  event.create('chaos_arena:waystone')
    .displayName('Chaos Arena Waystone')
    .hardness(-1) // Unbreakable
    .resistance(3600000) // Blast resistant
    .lightLevel(15) // Emits light
    .mapColor('purple')
    .soundType('amethyst')
    .renderType('cutout')
    .box(2, 0, 2, 14, 16, 14)
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:wither_immune')
    .item(item => {
      item.displayName('Chaos Arena Waystone');
      item.rarity('epic');
    });
});

console.log('Registered Chaos Arena blocks');