export function getMousePosition(dom: HTMLElement, x: number, y: number) {
    const rect = dom.getBoundingClientRect();
    return [
        (x - rect.left) / rect.width,
        (y - rect.top) / rect.height
    ];
}