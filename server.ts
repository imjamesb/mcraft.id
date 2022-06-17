// Imports
import { serve } from "./deps/std.ts";
import TemporaryPage from "./pages/Temporary.tsx";

serve(() => TemporaryPage.clone());
