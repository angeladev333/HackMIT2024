export function getHost(): string {
    return "http://localhost:8080";
}

const host = getHost()

export function getGenerateURL(searchQuery: string): URL {
    return new URL(`${host}/tree/${cleanSearchQuery(searchQuery)}`)
}

function cleanSearchQuery(query: string): string {
    return encodeURIComponent(query.trim());
}
