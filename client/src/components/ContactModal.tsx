import { useState } from "react";
import { TerminalWindow } from "./TerminalWindow";
import { useSubmitContact } from "@/hooks/use-contact";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Terminal } from "lucide-react";
import { z } from "zod";
import { insertMessageSchema } from "@shared/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const mutation = useSubmitContact();

  const form = useForm<z.infer<typeof insertMessageSchema>>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof insertMessageSchema>) {
    mutation.mutate(values, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg"
          className="
            border-2 border-primary text-primary bg-black/50 backdrop-blur-md
            hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]
            transition-all duration-300 font-mono text-lg uppercase tracking-widest px-8 py-6 h-auto rounded-none
          "
        >
          <Terminal className="mr-2 w-5 h-5" />
          Init_Contact_Protocol
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-transparent max-w-2xl w-full shadow-none sm:rounded-none">
        <TerminalWindow title="SECURE_CHANNEL_ESTABLISHED" variant="primary" className="h-full">
          <p className="mb-6 font-mono text-sm opacity-80">
            {'>'} ENCRYPTED CONNECTION: ACTIVE<br/>
            {'>'} TRACE ROUTE: BLOCKED<br/>
            {'>'} ENTER CREDENTIALS BELOW...
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-primary uppercase">Agent_ID / Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Neo" 
                          {...field} 
                          className="bg-black/50 border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-mono text-primary placeholder:text-primary/30"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 font-mono" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-primary uppercase">Comms_Link / Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="neo@matrix.net" 
                          {...field} 
                          className="bg-black/50 border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-mono text-primary placeholder:text-primary/30"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 font-mono" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-primary uppercase">Payload / Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="System vulnerabilities detected..." 
                        {...field} 
                        className="min-h-[120px] bg-black/50 border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary rounded-none font-mono text-primary placeholder:text-primary/30"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 font-mono" />
                  </FormItem>
                )}
              />

              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="
                    bg-primary text-black hover:bg-white hover:text-black
                    font-bold font-mono uppercase tracking-widest rounded-none
                    border-2 border-primary px-8
                  "
                >
                  {mutation.isPending ? (
                    <span className="animate-pulse">TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      EXECUTE_SEND
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </TerminalWindow>
      </DialogContent>
    </Dialog>
  );
}
