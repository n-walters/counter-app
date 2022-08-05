const NUM_OF_COUNTERS = 3;

window.addEventListener("DOMContentLoaded", () => {
    const counters = Array.from(Array(NUM_OF_COUNTERS)).map(createCounter);
    counters.forEach((counter) => {
        counter.addEventListener("click", handleCounterClick);
    });
});

function createCounter() {
    const counter = document.createElement("div");
    counter.classList.add("counter");
    counter.dataset.value = 0;
    counter.innerText = 0;
    window.counters.appendChild(counter);
    return counter;
}

function handleCounterClick(event) {
    console.log(event);
    if (event.clientY < this.clientHeight * 0.9) {
        this.dataset.value++;
    } else {
        this.dataset.value--;
    }
    this.innerText = this.dataset.value;
}
