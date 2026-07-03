import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit as fbLimit,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ProjectType } from "@/lib/project";

/**
 * RecentProject is a FULLY INDEPENDENT entity from Project. It lives in its
 * own Firestore collection ("recentProjects"), has its own id, and its own
 * lifecycle. Creating/editing/deleting a Project never touches a
 * RecentProject and vice-versa. If an admin wants a project to also show up
 * in the homepage "Recent Projects" carousel, they add a separate
 * RecentProject entry for it (optionally pre-filling the form from an
 * existing project as a starting point — see the "import" helper on the
 * add page — but after that the two records are unrelated).
 */
export interface RecentProject {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  type: ProjectType;
  accentColor: string;
  year: string;
  /** Left-to-right position within the Recent Projects carousel. */
  position: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

const COLLECTION = "recentProjects";

/**
 * ADMIN ONLY. Returns every recent-project entry regardless of `active`
 * status, ordered by position.
 */
export async function fetchAllRecentProjects(): Promise<RecentProject[]> {
  const q = query(collection(db, COLLECTION), orderBy("position", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<RecentProject, "id">) }));
}

/**
 * PUBLIC. Returns active recent-project entries, ordered for display on the
 * homepage carousel. Fully independent of the `projects` collection.
 */
export async function fetchRecentProjects(count = 12): Promise<RecentProject[]> {
  const q = query(
    collection(db, COLLECTION),
    where("active", "==", true),
    orderBy("position", "asc"),
    fbLimit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<RecentProject, "id">) }));
}

export async function fetchRecentProjectById(id: string): Promise<RecentProject | null> {
  const ref = doc(db, COLLECTION, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() as Omit<RecentProject, "id">) };
}

export async function createRecentProject(
  data: Omit<RecentProject, "id" | "createdAt" | "updatedAt">
) {
  return addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export async function updateRecentProject(id: string, data: Partial<RecentProject>) {
  const ref = doc(db, COLLECTION, id);
  return updateDoc(ref, { ...data, updatedAt: new Date().toISOString() });
}

/** Permanently deletes the recent-project entry. Does NOT touch `projects`. */
export async function deleteRecentProject(id: string) {
  const ref = doc(db, COLLECTION, id);
  return deleteDoc(ref);
}