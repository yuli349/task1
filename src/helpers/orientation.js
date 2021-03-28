export default function getOrientation() {
    if (window.innerWidth < window.innerHeight) {
        return 'portrait';
    }
    return 'landscape';
}
