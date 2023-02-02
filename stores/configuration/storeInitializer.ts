import MainStore from "../mainStore";

export default function initializeStores() {
    return {
        mainStore: new MainStore(),
    };
}
