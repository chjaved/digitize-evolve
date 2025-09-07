import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppChat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/b6qqva', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppChat;