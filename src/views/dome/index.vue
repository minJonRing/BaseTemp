<template>
  <div>123</div>
</template>
  
<script >
export default {
  name: "Dome",
  mounted() {
    let user = {
      name: "tqr",
      age: 12,
    };
    const weakMap = new WeakMap();
    weakMap.set(user, "tqr");
    console.log(weakMap);
    console.log(weakMap.get(user));
    user = null;
    console.log(weakMap.get(user));
  },
};
</script>
  
  