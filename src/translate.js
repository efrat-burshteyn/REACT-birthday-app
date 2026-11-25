export async function translate(text, source, target) {
    if (source === target) return text;

    const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
    );
    const data = await res.json();
    return data.responseData.translatedText;
}