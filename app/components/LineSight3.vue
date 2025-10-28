<script setup>
import { ref, onMounted } from 'vue';

const myCanvas3 = ref(null);

onMounted(() => {
  if (myCanvas3.value) {
    const ctx = myCanvas3.value.getContext('2d');
    if (ctx) {
        const radius = 40; // Corner radius
        
        ctx.strokeStyle = '#2e7d32';
        ctx.lineWidth = 10;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        ctx.beginPath();
        
        // Point 1 to Point 2 (vertical line)
        ctx.moveTo(1770, 0);
        ctx.lineTo(1770, 514 - radius);
        
        // Rounded corner at Point 2
        ctx.arcTo(1770, 514, 128, 514, radius);
        
        // Point 2 to Point 3 (horizontal line)
        ctx.lineTo(128 + radius, 514);
        
        // Rounded corner at Point 3
        ctx.arcTo(128, 514, 128, 1250, radius);
        
        // Point 3 to Point 4 (vertical line)
        ctx.lineTo(128, 1250 - radius);
        
        // Rounded corner at Point 4
        ctx.arcTo(128, 1250, 1770, 1250, radius);
        
        // Point 4 to Point 5 (horizontal line)
        ctx.lineTo(1770 - radius, 1250);
        
        // Rounded corner at Point 5
        ctx.arcTo(1770, 1250, 1770, 2210, radius);
        
        // Point 5 to Point 6 (vertical line)
        ctx.lineTo(1770, 2210 - radius);
        
        // Rounded corner at Point 6
        ctx.arcTo(1770, 2210, 128, 2210, radius);
        
        // Point 6 to Point 7 (horizontal line)
        ctx.lineTo(128 + radius, 2210);
        
        // Rounded corner at Point 7
        ctx.arcTo(128, 2210, 128, 2524, radius);
        
        // Point 7 to Point 8 (vertical line)
        ctx.lineTo(128, 4000);

        ctx.stroke();
    }
  }
});
</script>

<template>
      <canvas ref="myCanvas3" width="1897" height="3000" style="position: absolute; top: 0px; z-index: -20;" class="min-w-[1440px]"></canvas>
</template>