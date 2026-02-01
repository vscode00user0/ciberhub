import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Transmission failed. Uplink unstable.');
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "TRANSMISSION SUCCESSFUL",
        description: "Message encrypted and sent to secure server.",
        variant: "default",
        className: "border-primary text-primary bg-black border-2 font-mono",
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION FAILED",
        description: error.message,
        variant: "destructive",
        className: "border-destructive text-destructive bg-black border-2 font-mono",
      });
    },
  });
}
