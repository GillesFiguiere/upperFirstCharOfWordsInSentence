import upperFirstCharOfWordsInSentence from './first-char-to-upper'

describe('first char to upper', () => {

    const wordSeparators = /([\s\.,])/

    it('should output "" when input is ""', () => {
        const output = upperFirstCharOfWordsInSentence("", wordSeparators)
        expect(output).toEqual("")
    })

    it('should output "Hello" when input is "hello"', () => {
        const output = upperFirstCharOfWordsInSentence("hello", wordSeparators)
        expect(output).toEqual("Hello")
    })

    it('should output "Hello World" when input is "hello world"', () => {
        const output = upperFirstCharOfWordsInSentence("hello world", wordSeparators)
        expect(output).toEqual("Hello World")
    })

    it('should output "   " when input is "   "', () => {
        const output = upperFirstCharOfWordsInSentence("   ", wordSeparators)
        expect(output).toEqual("   ")
    })

    it('should output "Hello.World" when input is "hello.world"', () => {
        const output = upperFirstCharOfWordsInSentence("hello.world", wordSeparators)
        expect(output).toEqual("Hello.World")
    })

    it('should output "Hello.World Hy,Buddies" when input is "hello.world hi,buddies"', () => {
        const output = upperFirstCharOfWordsInSentence("hello.world hi,buddies", wordSeparators)
        expect(output).toEqual("Hello.World Hi,Buddies")
    })

    it('should output "" when input is null', () => {
        const output = upperFirstCharOfWordsInSentence(null, wordSeparators)
        expect(output).toEqual('')
    })

    it('should output "" when input is undefined', () => {
        const output = upperFirstCharOfWordsInSentence(undefined, wordSeparators)
        expect(output).toEqual('')
    })
})
