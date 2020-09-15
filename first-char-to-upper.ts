
const upperFirstCharOfWordsInSentence = (sentence: string, wordSeparators: RegExp): string => {
    if (!sentence) return ''
    const words = sentence.split(wordSeparators)
    return words.map(upperFirstCharOfWord).join('')
}

const upperFirstCharOfWord = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1)

export default upperFirstCharOfWordsInSentence
