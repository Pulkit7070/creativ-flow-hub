
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Sparkles, Plus, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const JobPostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleAIGenerate = () => {
    // In a real app, this would call an AI service
    setIsLoading(true);
    setTimeout(() => {
      setTitle("Professional Video Editor for YouTube Gaming Channel");
      setDescription(
        "I'm looking for an experienced video editor to help with my gaming YouTube channel. I need someone who can edit gameplay footage, add effects, create engaging intros and outros, and optimize for viewer retention. Familiarity with games like Fortnite, Minecraft, and Call of Duty is a plus. I upload 2-3 videos per week, each around 15-20 minutes long."
      );
      setCategory("video-editing");
      setBudgetMin("300");
      setBudgetMax("500");
      setDuration("1-3 weeks");
      setSkills(["Video Editing", "After Effects", "Premiere Pro", "Gaming", "YouTube"]);
      setIsLoading(false);
      toast.success("Job description generated!");
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title || !description || !category || !budgetMin || !budgetMax || !duration || skills.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsLoading(true);
    
    // In a real app, this would make an API call
    setTimeout(() => {
      toast.success("Job posted successfully!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Post a New Job</h1>
        <Button
          type="button"
          variant="outline"
          onClick={handleAIGenerate}
          disabled={isLoading}
          className="flex items-center space-x-2 border-brand-300 text-brand-700 hover:bg-brand-50"
        >
          <Sparkles size={16} className="text-brand-500" />
          <span>AI Generate</span>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Job Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-base">
              Job Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Professional Video Editor for YouTube Channel"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category" className="text-base">
              Category <span className="text-red-500">*</span>
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video-editing">Video Editing</SelectItem>
                <SelectItem value="thumbnail-design">Thumbnail Design</SelectItem>
                <SelectItem value="animation">Animation</SelectItem>
                <SelectItem value="voiceover">Voiceover</SelectItem>
                <SelectItem value="scriptwriting">Scriptwriting</SelectItem>
                <SelectItem value="color-grading">Color Grading</SelectItem>
                <SelectItem value="podcast-editing">Podcast Editing</SelectItem>
                <SelectItem value="livestream">Livestream Editing</SelectItem>
                <SelectItem value="drone-operator">Drone Operator</SelectItem>
                <SelectItem value="vfx">VFX Artist</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-base">
              Job Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the job requirements, deliverables, and any specific skills or experience needed..."
              className="min-h-32"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="budget-min" className="text-base">
                  Budget Range <span className="text-red-500">*</span>
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <HelpCircle size={16} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        A fair budget attracts quality professionals. Consider market rates for your requirements.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <Input
                      id="budget-min"
                      type="number"
                      value={budgetMin}
                      onChange={(e) => setBudgetMin(e.target.value)}
                      className="pl-8"
                      placeholder="Min"
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <Input
                      id="budget-max"
                      type="number"
                      value={budgetMax}
                      onChange={(e) => setBudgetMax(e.target.value)}
                      className="pl-8"
                      placeholder="Max"
                      min={budgetMin ? parseInt(budgetMin) : 0}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-base">
                Expected Duration <span className="text-red-500">*</span>
              </Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less-than-week">Less than 1 week</SelectItem>
                  <SelectItem value="1-3 weeks">1-3 weeks</SelectItem>
                  <SelectItem value="1-3 months">1-3 months</SelectItem>
                  <SelectItem value="3-6 months">3-6 months</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Label className="text-base">
              Required Skills <span className="text-red-500">*</span>
            </Label>
            <div className="flex">
              <Input
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={handleSkillInputKeyDown}
                placeholder="e.g. After Effects, Premiere Pro"
                className="rounded-r-none"
              />
              <Button
                type="button"
                onClick={handleAddSkill}
                className="rounded-l-none bg-brand-600 hover:bg-brand-700"
              >
                <Plus size={18} />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1 pl-2 pr-1 py-1 bg-brand-50 hover:bg-brand-100"
                >
                  {skill}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 rounded-full hover:bg-brand-200"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    <X size={12} />
                  </Button>
                </Badge>
              ))}
              {skills.length === 0 && (
                <span className="text-sm text-gray-500">
                  Add skills that are required for this job
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button
          type="submit"
          className="bg-brand-600 hover:bg-brand-700"
          disabled={isLoading}
        >
          {isLoading ? "Posting..." : "Post Job"}
        </Button>
      </div>
    </form>
  );
};

export default JobPostForm;
