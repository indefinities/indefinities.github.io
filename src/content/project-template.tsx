import { ProjectProps } from "../lib/types";

export default function ProjectTemp({ content }: ProjectProps) {
    const iconClasses: string = 'size-6';

    return (
        <div className="p-6 h-full lg:w-[70%] overflow-y-scroll">
            <a href={content.cover} target="_blank">
                <img className="rounded-sm m-auto" src={content.cover} />
            </a>
            <div className="my-4 flex flex-row gap-2 items-center">
                <span>
                    <h3 className="uppercase font-bold">{content.title}</h3>
                </span>

                <span className="flex flex-row gap-2">
                    {
                        content.github &&
                        <a href={content.github} target="_blank">
                            <svg className={iconClasses + ' fill-sky-800'} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" />
                            </svg>
                        </a>
                    }
                    {
                        content.figma &&
                        <a href={content.figma} target="_blank">
                            <svg className={iconClasses} viewBox="0 0 24 24" stroke-width=".895">
                                <path d="M11.554 4v-.447H8.738a2.553 2.553 0 1 0 0 5.105H11.554V4Z" fill="#DF5A33" stroke="#DF5A33"></path><path d="M11.554 9.895v-.448H8.738a2.553 2.553 0 0 0 0 5.106H11.554V9.895Z" fill="#985CF7" stroke="#985CF7"></path><path d="M11.554 15.79v-.448H8.738a2.553 2.553 0 0 0 0 5.105h.132a2.684 2.684 0 0 0 2.684-2.684V15.79Z" fill="#5ECC89" stroke="#5ECC89">
                                </path>
                                <path d="M15.262 9.447a2.553 2.553 0 1 1 0 5.106h-.263a2.553 2.553 0 0 1 0-5.106h.263Z" fill="#57B9F8" stroke="#57B9F8"></path><path d="M12.446 4v-.447H15.262a2.553 2.553 0 1 1 0 5.105H12.446V4Z" fill="#EE7A69" stroke="#EE7A69">
                                </path>
                                </svg>
                        </a>
                    }

                    {
                        content.url &&
                        <a href={content.url} target="_blank">
                            <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    }

                </span>
            </div>

            <p>
                {content.description}
            </p>
        </div>
    )
}