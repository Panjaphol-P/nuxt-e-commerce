<script setup>
import { ref, onMounted } from 'vue';

const myCanvas2 = ref(null);

onMounted(() => {
  if (myCanvas2.value) {
    const ctx = myCanvas2.value.getContext('2d');
    if (ctx) {
        const radius = 40; // Corner radius
        
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 10;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        
        // Point 1 to Point 2 (vertical line)
        ctx.moveTo(128, 0);
        ctx.lineTo(128, 588 - radius);
        
        // Rounded corner at Point 2
        ctx.arcTo(128, 588, 352, 588, radius);
        
        // Point 2 to Point 3 (horizontal line)
        ctx.lineTo(352 - radius, 588);
        
        // Rounded corner at Point 3
        ctx.arcTo(352, 588, 352, 108, radius);
        
        // Point 3 to Point 4 (vertical line)
        ctx.lineTo(352, 108 + radius);
        
        // Rounded corner at Point 4
        ctx.arcTo(352, 108, 1088, 108, radius);
        
        // Point 4 to Point 5 (horizontal line)
        ctx.lineTo(1540 - radius, 108);
        
        // Rounded corner at Point 5
        ctx.arcTo(1540, 108, 1540, 588, radius);
        
        // Point 5 to Point 6 (vertical line)
        ctx.lineTo(1540, 588 - radius);
        
        // Rounded corner at Point 6
        ctx.arcTo(1540, 588, 1770 , 588, radius);
        
        // Point 6 to Point 7 (horizontal line)
        ctx.lineTo(1770 - radius, 588);
        
        // Rounded corner at Point 7
        ctx.arcTo(1770, 588, 1770, 696, radius);
        
        // Point 7 to Point 8 (vertical line)
        ctx.lineTo(1770, 696);

        ctx.stroke();
    }
  }
});
</script>

<template>
      <canvas ref="myCanvas2" width="1897" height="696" style="position: absolute; top: 0px; z-index: -20;" class="min-w-[1440px]"></canvas>
</template>