class StringIgnoreCaseComparer {
    equals(value1, value2) {
        return value1.toLowerCase() === value2.toLowerCase();
    }
    getHashCode(value) {
        return value
            .toLowerCase()
            .split("")
            .reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    }
}
const instance = new StringIgnoreCaseComparer();
export { instance as StringIgnoreCaseComparer };
//# sourceMappingURL=StringIgnoreCaseComparer.js.map