
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Alekhya Vigrahala</h1>
              <h2 className="text-xl font-medium text-primary-foreground/80 sm:text-2xl">Software Engineer</h2>
              <p className="text-primary-foreground/70 max-w-[600px] md:text-lg">
                I'm a passionate software engineer with a strong foundation in various programming languages and
                frameworks. I'm always eager to learn new technologies and tackle challenging projects.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="Alekhya_Photo.jpg"
                width="400"
                height="400"
                alt="John Doe"
                className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
                <p className="text-muted-foreground max-w-[600px] md:text-lg">Check out some of my recent projects.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 1"
                      className="rounded-t-lg w-full aspect-[16/9] object-cover" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-medium">Space and Aesthetic System</h3>
                    <p className="text-muted-foreground">
                    It involves thoughtful consideration of layout,
workflow, storage, and aesthetics to create
spaces that align with their intended
purpose
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        Live Demo
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 2"
                      className="rounded-t-lg w-full aspect-[16/9] object-cover" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-medium">Project Management System</h3>
                    <p className="text-muted-foreground">Project management focuses on planning
and organizing a project and its resources.
This includes identifying and managing the
lifecycle to be used, applying it to the user
centered design process.
</p>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        Live Demo
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 3"
                      className="rounded-t-lg w-full aspect-[16/9] object-cover" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-medium">Task Management System</h3>
                    <p className="text-muted-foreground">
                      
•Task Management System: Developed a
Spring Boot and MySQL-based To-do list
application enabling users to create, update,
and delete tasks.
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        Live Demo
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills</h2>
                <p className="text-muted-foreground max-w-[600px] md:text-lg">
                  Here are some of the technologies I&apos;m proficient in.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-background rounded-lg p-4 flex items-center gap-4">
                  <CodepenIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">React</h3>
                    <p className="text-muted-foreground text-sm">JavaScript library for building user interfaces</p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center gap-4">
                  <CodepenIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Node.js</h3>
                    <p className="text-muted-foreground text-sm">
                      JavaScript runtime for building server-side applications
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center gap-4">
                  <TypeIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">TypeScript</h3>
                    <p className="text-muted-foreground text-sm">Superset of JavaScript that adds static typing</p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center gap-4">
                  <DatabaseIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">MongoDB</h3>
                    <p className="text-muted-foreground text-sm">NoSQL database for storing and retrieving data</p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center gap-4">
                  <DockIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Docker</h3>
                    <p className="text-muted-foreground text-sm">
                      Container platform for building and deploying applications
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4 flex items-center gap-4">
                  <GitGraphIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-medium">Git</h3>
                    <p className="text-muted-foreground text-sm">Version control system for tracking changes in code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact</h2>
                <p className="text-muted-foreground max-w-[600px] md:text-lg">
                  Feel free to reach out to me if you have any questions or would like to collaborate on a project.
                </p>
              </div>
              <form className="max-w-md mx-auto space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@gmail.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Alekhya Vigrahala. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function CodepenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>)
  );
}


function DatabaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>)
  );
}


function DockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>)
  );
}


function GitGraphIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>)
  );
}


function TypeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
