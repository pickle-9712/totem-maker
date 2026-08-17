import Button from "@/app/oldstuff/cssexample/Button"

export default function Page() {
    return (
        // I will explain the <> </> below next class, just ignore for now
        <>
            {/* <div> is a container, the stuff between <div> and </div> are inside of that container*/}
            <div>
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                {/* You might need to change the variant below if you named it something else */}
                <Button variant="secondary">Secondary</Button>
            </div>

            {/* You can add CSS styling to a div just like you can to a Button */}
            {/* bg, p-6, rounded are the same as with the button, shadow-md adds a shadow, w-fit makes the div fit to its content, try removing it*/}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md w-fit">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="secondary">Secondary</Button>
            </div>

            {/* flex creates a flex-box, flex-col makes the components within the flex-box stack vertically */}
            <div className="flex flex-col p-4 w-fit">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="secondary">Secondary</Button>
            </div>

            {/* you can use gap to add space between elements in a flex-box */}
            <div className="flex flex-col p-4 w-fit gap-4">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="secondary">Secondary</Button>
            </div>

            {/* Try editing the div's className below to have a horizontal flex-box that uses gap to make space between elements */}
            <div className="">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="secondary">Secondary</Button>
            </div>
        </>

    )
}