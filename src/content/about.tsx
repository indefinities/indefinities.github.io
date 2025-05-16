import Button from "../components/button";

interface AboutProps {
    onNextPage: () => void
}

export default function About({ onNextPage }: AboutProps) {
    const pClasses: string = "my-5";

    const handleOnNext = (): void => {
        onNextPage();
    }

    return (
        <div className="m-6 lg:w-[60%]">
            <div className="flex flex-row items-center">
                <img
                    className="rounded-full"
                    width={96}
                    height={96}
                    src="/me.jpg" />
                <span className="ml-5 w-[60%]">
                    <h3 className="uppercase font-bold">Natalie Hsu</h3>
                    <p className="italic">A creative problem solver and developer of digital sketches
                        based in Boston, MA</p>
                </span>
            </div>

            <div>
                <p className={pClasses}>
                    My interest in web development started when I first interacted with the internet,
                    especially indie Adobe Flash games or MMOs such as Club Penguin. I was also big
                    into customizing Tumblr themes, which taught me a lot about the fundamentals of HTML and CSS.
                </p>
                <p className={pClasses}>
                    Presently, I continue to challenge my curiosity through developing pixel perfect, accessible,
                    and intuitive user interfaces and experiences.
                </p>
                <p className={pClasses}>
                    In my free time, I enjoy traveling and illustrating my journey and friends on my iPad.
                </p>
                <p className={pClasses}>
                    Click on the mail icon in the footer if you're interested in getting in touch! :)
                </p>
            </div>

            <div className="flex flex-row justify-center items-center">
                <Button onClick={handleOnNext}>
                    <span className="flex flex-row gap-2">
                        <p className="uppercase font-bold">see my skills</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </span>

                </Button>
            </div>
        </div>
    );
}