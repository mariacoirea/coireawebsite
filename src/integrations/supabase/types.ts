export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      journey_submissions: {
        Row: {
          additional_context: string | null
          budget: string | null
          challenges: string[] | null
          company: string
          created_at: string
          custom_challenge: string | null
          email: string
          first_name: string
          found_us: string | null
          goals: string
          id: string
          last_name: string
          phone: string | null
          role: string
          team_size: string | null
          timeline: string | null
        }
        Insert: {
          additional_context?: string | null
          budget?: string | null
          challenges?: string[] | null
          company: string
          created_at?: string
          custom_challenge?: string | null
          email: string
          first_name: string
          found_us?: string | null
          goals: string
          id?: string
          last_name: string
          phone?: string | null
          role: string
          team_size?: string | null
          timeline?: string | null
        }
        Update: {
          additional_context?: string | null
          budget?: string | null
          challenges?: string[] | null
          company?: string
          created_at?: string
          custom_challenge?: string | null
          email?: string
          first_name?: string
          found_us?: string | null
          goals?: string
          id?: string
          last_name?: string
          phone?: string | null
          role?: string
          team_size?: string | null
          timeline?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          author: string | null
          body_content: string
          body_content_es: string | null
          cluster: string
          created_at: string
          featured: boolean | null
          featured_image: string | null
          id: string
          language: string | null
          meta_description: string | null
          meta_description_es: string | null
          preview_snippet: string
          preview_snippet_es: string | null
          published: boolean | null
          seo_keywords: string[] | null
          seo_keywords_es: string[] | null
          seo_title: string | null
          seo_title_es: string | null
          slug: string
          tags: string[] | null
          title: string
          title_es: string | null
          translation_group: string | null
          updated_at: string
        }
        Insert: {
          author?: string | null
          body_content: string
          body_content_es?: string | null
          cluster: string
          created_at?: string
          featured?: boolean | null
          featured_image?: string | null
          id?: string
          language?: string | null
          meta_description?: string | null
          meta_description_es?: string | null
          preview_snippet: string
          preview_snippet_es?: string | null
          published?: boolean | null
          seo_keywords?: string[] | null
          seo_keywords_es?: string[] | null
          seo_title?: string | null
          seo_title_es?: string | null
          slug: string
          tags?: string[] | null
          title: string
          title_es?: string | null
          translation_group?: string | null
          updated_at?: string
        }
        Update: {
          author?: string | null
          body_content?: string
          body_content_es?: string | null
          cluster?: string
          created_at?: string
          featured?: boolean | null
          featured_image?: string | null
          id?: string
          language?: string | null
          meta_description?: string | null
          meta_description_es?: string | null
          preview_snippet?: string
          preview_snippet_es?: string | null
          published?: boolean | null
          seo_keywords?: string[] | null
          seo_keywords_es?: string[] | null
          seo_title?: string | null
          seo_title_es?: string | null
          slug?: string
          tags?: string[] | null
          title?: string
          title_es?: string | null
          translation_group?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_posts_translation_group"
            columns: ["translation_group"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
