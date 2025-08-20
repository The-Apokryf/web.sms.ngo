<template>
  <div class="item">
    <span>
      <slot name="icon"></slot>
    </span>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

span {
  display: flex;
  place-items: center;
  place-content: center;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 20px;
  width: 50px;
  height: 50px;
  color: var(--color-background-soft);
  background: var(--color-text);
  text-shadow: 2px 2px 3px var(--color-border-hover), -2px -2px 3px var(--color-border-hover), 2px -2px 3px var(--color-border-hover), -2px 2px 3px var(--color-border-hover);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  span {
    color: var(--color-heading);
    background: var(--color-background-mute);
    text-shadow: 2px 2px 3px var(--color-border-hover), -2px -2px 3px var(--color-border-hover), 2px -2px 3px var(--color-border-hover), -2px 2px 3px var(--color-border-hover);
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border-radius: 8px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
