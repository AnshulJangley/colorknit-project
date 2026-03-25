import Image from "next/image";

const team = [
    { name: "Aarav Sharma", role: "Creative Director", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
    { name: "Meera Patel", role: "Head of Floral Design", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop" },
    { name: "Kabir Singh", role: "Lead Event Coordinator", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" }
];

const values = [
    "Uncompromising Quality",
    "Bespoke Personalization",
    "Flawless Execution",
    "Quiet Luxury"
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-bg">
            {/* 1. Intro Section */}
            <section className="py-[120px] md:py-[160px] px-8 md:px-[64px] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-b border-border">
                <div>
                    <span className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted block mb-4">About Us</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-light text-primary mb-12">
                        The ColorKnit Story
                    </h1>
                    <p className="font-sans text-[16px] text-primary/80 leading-[1.75] mb-6">
                        Founded in 2012, ColorKnit emerged from a singular vision: to redefine the landscape of Indian weddings with an aesthetic rooted in refined minimalism and quiet luxury.
                    </p>
                    <p className="font-sans text-[16px] text-primary/80 leading-[1.75] mb-6">
                        We move away from the noise and clutter, focusing instead on typographic hierarchy, intentional spacing, and curated moments that let your story breathe.
                    </p>
                    <p className="font-sans text-[16px] text-primary/80 leading-[1.75]">
                        Every event we touch is treated as a piece of art — meticulously planned, flawlessly executed, and deeply personal.
                    </p>
                </div>
                <div className="relative h-[600px] w-full bg-primary/5 p-4 rounded-t-full">
                    <div className="relative h-full w-full overflow-hidden rounded-t-full">
                        <Image
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                            alt="ColorKnit Founders"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 2. Values */}
            <section className="bg-blush py-[80px]">
                <div className="max-w-[1280px] mx-auto px-8 md:px-[64px]">
                    <h2 className="font-sans text-[12px] uppercase tracking-[0.18em] text-muted mb-12 text-center">Our Core Values</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-border w-full">
                        {values.map((value, idx) => (
                            <div key={idx} className="flex-1 w-full text-center py-6 md:py-0">
                                <span className="font-serif text-2xl md:text-3xl text-primary font-medium">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Team Section */}
            <section className="py-[120px] md:py-[160px] px-8 md:px-[64px] max-w-[1280px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-6">The Artisans Behind the Events</h2>
                    <div className="w-16 h-[1px] bg-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden mb-8">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-serif text-3xl text-primary mb-2 transition-colors group-hover:text-gold">{member.name}</h3>
                            <p className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-muted">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
