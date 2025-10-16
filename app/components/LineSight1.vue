<script setup>
import { ref, onMounted } from 'vue';

const myCanvas = ref(null);

onMounted(() => {
  if (myCanvas.value) {
    const ctx = myCanvas.value.getContext('2d');
    if (ctx) {
        const offsetY = 122;
        const radius = 40; // Corner radius
        
        ctx.strokeStyle = '#2e7d32';
        ctx.lineWidth = 10;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        
        // Point 1 to Point 2 (vertical line)
        ctx.moveTo(896, 194 - offsetY);
        ctx.lineTo(896, 268 - offsetY - radius);
        
        // Rounded corner at Point 2
        ctx.arcTo(896, 268 - offsetY, 1227, 268 - offsetY, radius);
        
        // Point 2 to Point 3 (horizontal line)
        ctx.lineTo(1227 - radius, 268 - offsetY);
        
        // Rounded corner at Point 3
        ctx.arcTo(1227, 268 - offsetY, 1227, 352 - offsetY, radius);
        
        // Point 3 to Point 4 (vertical line)
        ctx.lineTo(1227, 352 - offsetY - radius);
        
        // Rounded corner at Point 4
        ctx.arcTo(1227, 352 - offsetY, 720, 352 - offsetY, radius);
        
        // Point 4 to Point 5 (horizontal line)
        ctx.lineTo(720 + radius, 352 - offsetY);
        
        // Rounded corner at Point 5
        ctx.arcTo(720, 352 - offsetY, 720, 439 - offsetY, radius);
        
        // Point 5 to Point 6 (vertical line)
        ctx.lineTo(720, 439 - offsetY - radius);
        
        // Rounded corner at Point 6
        ctx.arcTo(720, 439 - offsetY, 1140, 439 - offsetY, radius);
        
        // Point 6 to Point 7 (horizontal line)
        ctx.lineTo(1040 - radius, 439 - offsetY);
        
        // Rounded corner at Point 7
        ctx.arcTo(1040, 439 - offsetY, 1040, 584 - offsetY, radius);
        
        // Point 7 to Point 8 (vertical line)
        ctx.lineTo(1040, 584 - offsetY - radius);
        
        // Rounded corner at Point 8
        ctx.arcTo(1040, 584 - offsetY, 128, 584 - offsetY, radius);
        
        // Point 8 to Point 9 (horizontal line)
        ctx.lineTo(128 + radius, 584 - offsetY);
        
        // Rounded corner at Point 9
        ctx.arcTo(128, 584 - offsetY, 128, 1474 - offsetY, radius);
        
        // Point 9 to Point 10 (vertical line)
        ctx.lineTo(128, 1474 - offsetY);
        
        ctx.stroke();
    }
  }
});
</script>

<template>
    <canvas ref="myCanvas" width="1440" height="1570" style="position: absolute; top: 0px; z-index: -10;" class="min-w-[1440px]"></canvas>
</template>